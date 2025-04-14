"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Copy, RotateCcw, History } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Conversion rates: kg per bushel for each crop
const BUSHEL_WEIGHTS: Record<string, number> = {
  wheat: 27.2155, // 60 lbs = 27.2155 kg
  corn: 25.4012, // 56 lbs = 25.4012 kg
  soybeans: 27.2155, // 60 lbs = 27.2155 kg
};

// Conversion rates: tonnes to bushels
const CONVERSION_RATES: Record<string, number> = {
  wheat: 1000 / BUSHEL_WEIGHTS.wheat, // 36.7437 bushels/tonne
  corn: 1000 / BUSHEL_WEIGHTS.corn, // 39.3683 bushels/tonne
  soybeans: 1000 / BUSHEL_WEIGHTS.soybeans, // 36.7437 bushels/tonne
};

type ConversionEntry = {
  inputValue: number;
  outputValue: number;
  inputUnit: string;
  outputUnit: string;
  crop: string;
  timestamp: string;
};

export default function TonnesToBushelsConverter() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [crop, setCrop] = useState("wheat");
  const [isTonnesToBushels, setIsTonnesToBushels] = useState(true);
  const [decimalPlaces, setDecimalPlaces] = useState(4);
  const [history, setHistory] = useState<ConversionEntry[]>([]);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // Real-time conversion
  useEffect(() => {
    const value = parseFloat(inputValue);
    if (!isNaN(value) && value >= 0) {
      let result: number;
      if (isTonnesToBushels) {
        result = value * CONVERSION_RATES[crop];
      } else {
        result = value / CONVERSION_RATES[crop];
      }
      setOutputValue(result.toFixed(decimalPlaces));
    } else {
      setOutputValue("");
    }
  }, [inputValue, crop, isTonnesToBushels, decimalPlaces]);

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleCopy = () => {
    if (!outputValue) return;
    navigator.clipboard
      .writeText(outputValue)
      .then(() => showNotification("Copied to clipboard", "success"))
      .catch(() => showNotification("Failed to copy", "error"));
  };

  const handleSaveToHistory = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value) || value < 0) {
      showNotification("Please enter a valid positive number", "error");
      return;
    }
    const output = parseFloat(outputValue);
    if (!isNaN(output)) {
      setHistory((prev) => [
        {
          inputValue: value,
          outputValue: output,
          inputUnit: isTonnesToBushels ? "tonnes" : "bushels",
          outputUnit: isTonnesToBushels ? "bushels" : "tonnes",
          crop,
          timestamp: new Date().toLocaleString(),
        },
        ...prev.slice(0, 9), // Keep last 10 conversions
      ]);
      showNotification("Conversion saved to history", "success");
    }
  };

  const handleReset = () => {
    setInputValue("");
    setOutputValue("");
    setCrop("wheat");
    setIsTonnesToBushels(true);
    setDecimalPlaces(4);
    setHistory([]);
    showNotification("Reset successful", "success");
  };

  // Comparison table data: bushels for the current input across crops
  const comparisonData = Object.keys(CONVERSION_RATES).map((cropType) => {
    const value = parseFloat(inputValue) || 0;
    const bushels = isTonnesToBushels
      ? (value * CONVERSION_RATES[cropType]).toFixed(decimalPlaces)
      : (value / CONVERSION_RATES[cropType]).toFixed(decimalPlaces);
    return { crop: cropType, bushels };
  });

  return (
    <Card className="max-w-5xl mx-auto shadow-lg bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t-4 border-t-primary">
      <CardContent className="space-y-6 pt-4">
        {notification && (
          <Alert
            className={`${
              notification.type === "success"
                ? "bg-green-50 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                : "bg-red-50 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
            } animate-in fade-in duration-300`}
          >
            <AlertDescription>{notification.message}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <Label htmlFor="input-value" className="text-base font-medium">
                Enter Weight in {isTonnesToBushels ? "Tonnes" : "Bushels"}
              </Label>
              <Input
                id="input-value"
                type="text"
                placeholder={`e.g., ${isTonnesToBushels ? "10" : "367.44"}`}
                value={inputValue}
                onChange={handleInputChange}
                className="transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="crop-type" className="text-base font-medium">
                Crop Type
              </Label>
              <Select value={crop} onValueChange={setCrop}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select crop type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat (60 lbs/bushel)</SelectItem>
                  <SelectItem value="corn">Corn (56 lbs/bushel)</SelectItem>
                  <SelectItem value="soybeans">
                    Soybeans (60 lbs/bushel)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="decimal-places" className="text-base font-medium">
                Decimal Places
              </Label>
              <Select
                value={decimalPlaces.toString()}
                onValueChange={(value) => setDecimalPlaces(parseInt(value))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select decimal places" />
                </SelectTrigger>
                <SelectContent>
                  {[2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <Label className="text-base font-medium">
                Result in {isTonnesToBushels ? "Bushels" : "Tonnes"}
              </Label>
              <div className="flex items-center justify-between p-3 bg-green-50/50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-md">
                <span className="text-green-950 dark:text-green-100 font-serif">
                  {outputValue
                    ? `${outputValue} ${
                        isTonnesToBushels ? "bushels" : "tonnes"
                      }`
                    : `Enter ${
                        isTonnesToBushels ? "tonnes" : "bushels"
                      } to see result`}
                </span>
                <Badge variant="secondary">
                  {crop.charAt(0).toUpperCase() + crop.slice(1)}
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-medium">
                Conversion Direction
              </Label>
              <div className="flex items-center space-x-2">
                <Switch
                  id="conversion-direction"
                  checked={isTonnesToBushels}
                  onCheckedChange={setIsTonnesToBushels}
                />
                <Label
                  htmlFor="conversion-direction"
                  className="font-medium cursor-pointer"
                >
                  {isTonnesToBushels
                    ? "Tonnes to Bushels"
                    : "Bushels to Tonnes"}
                </Label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            onClick={handleSaveToHistory}
            className="flex-1 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02] bg-gradient-to-r from-primary to-primary/90"
            disabled={!inputValue || parseFloat(inputValue) < 0}
          >
            <History className="mr-2 h-5 w-5" />
            Save to History
          </Button>
          <Button
            onClick={handleCopy}
            className="flex-1 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02]"
            disabled={!outputValue}
          >
            <Copy className="mr-2 h-5 w-5" />
            Copy Result
          </Button>
          <Button
            variant="outline"
            onClick={handleReset}
            className="sm:w-auto flex items-center justify-center"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>

        {history.length > 0 && (
          <div className="space-y-3 pt-2">
            <Label className="text-base font-medium">Conversion History</Label>
            <ScrollArea className="h-[150px] w-full border border-slate-200 rounded-md p-3 bg-white dark:bg-gray-900">
              {history.map((entry, index) => (
                <div
                  key={index}
                  className="py-2 border-b border-slate-100 dark:border-slate-700 last:border-0"
                >
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {entry.inputValue} {entry.inputUnit} = {entry.outputValue}{" "}
                    {entry.outputUnit} ({entry.crop})
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {entry.timestamp}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </div>
        )}

        {inputValue && parseFloat(inputValue) >= 0 && (
          <div className="space-y-3 pt-2">
            <Label className="text-base font-medium">
              Comparison Across Crops
            </Label>
            <ScrollArea className="h-[150px] w-full border border-slate-200 rounded-md bg-white dark:bg-gray-900">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-slate-900 dark:text-slate-100">
                      Crop
                    </TableHead>
                    <TableHead className="text-slate-900 dark:text-slate-100">
                      {isTonnesToBushels ? "Bushels" : "Tonnes"}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-slate-700 dark:text-slate-300">
                        {row.crop.charAt(0).toUpperCase() + row.crop.slice(1)}
                      </TableCell>
                      <TableCell className="text-slate-700 dark:text-slate-300">
                        {row.bushels}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col text-center border-t pt-4 pb-6 px-6 text-xs text-muted-foreground">
        <p>
          This tool provides accurate tonnes to bushels conversions based on
          standard agricultural weights. Always verify crop-specific weights for
          critical applications.
        </p>
      </CardFooter>
    </Card>
  );
}
