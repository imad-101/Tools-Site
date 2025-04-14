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

// Conversion rates: 1 gram to ratti
const CONVERSION_RATES: Record<string, number> = {
  standard: 5.4945, // 1 gram = 5.4945 ratti (1 ratti ≈ 0.182g)
  gujarat: 5.2632, // 1 gram = 5.2632 ratti (1 ratti ≈ 0.19g)
  southIndia: 5.7143, // 1 gram = 5.7143 ratti (1 ratti ≈ 0.175g)
};

type ConversionEntry = {
  inputValue: number;
  outputValue: number;
  inputUnit: string;
  outputUnit: string;
  rattiType: string;
  timestamp: string;
};

export default function GramToRattiConverter() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [rattiType, setRattiType] = useState("standard");
  const [isGramToRatti, setIsGramToRatti] = useState(true);
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
      if (isGramToRatti) {
        result = value * CONVERSION_RATES[rattiType];
      } else {
        result = value / CONVERSION_RATES[rattiType];
      }
      setOutputValue(result.toFixed(decimalPlaces));
    } else {
      setOutputValue("");
    }
  }, [inputValue, rattiType, isGramToRatti, decimalPlaces]);

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
          inputUnit: isGramToRatti ? "grams" : "ratti",
          outputUnit: isGramToRatti ? "ratti" : "grams",
          rattiType,
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
    setRattiType("standard");
    setIsGramToRatti(true);
    setDecimalPlaces(4);
    setHistory([]);
    showNotification("Reset successful", "success");
  };

  // Static conversion table data
  const tableData = Array.from({ length: 10 }, (_, i) => {
    const gram = (i + 1) * 0.5; // 0.5g to 5g
    const rattiValue = (gram * CONVERSION_RATES[rattiType]).toFixed(4);
    return { gram, ratti: rattiValue };
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
                Enter Weight in {isGramToRatti ? "Grams" : "Ratti"}
              </Label>
              <Input
                id="input-value"
                type="text"
                placeholder={`e.g., ${isGramToRatti ? "1.5" : "8.24"}`}
                value={inputValue}
                onChange={handleInputChange}
                className="transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="ratti-type" className="text-base font-medium">
                Ratti Type
              </Label>
              <Select value={rattiType} onValueChange={setRattiType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select ratti type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (0.182g)</SelectItem>
                  <SelectItem value="gujarat">Gujarat (0.19g)</SelectItem>
                  <SelectItem value="southIndia">
                    South India (0.175g)
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
                Result in {isGramToRatti ? "Ratti" : "Grams"}
              </Label>
              <div className="flex items-center justify-between p-3 bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-md">
                <span className="text-amber-950 dark:text-amber-100 font-serif">
                  {outputValue
                    ? `${outputValue} ${isGramToRatti ? "ratti" : "grams"}`
                    : `Enter ${
                        isGramToRatti ? "grams" : "ratti"
                      } to see result`}
                </span>
                <Badge variant="secondary">
                  {rattiType.charAt(0).toUpperCase() + rattiType.slice(1)}
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
                  checked={isGramToRatti}
                  onCheckedChange={setIsGramToRatti}
                />
                <Label
                  htmlFor="conversion-direction"
                  className="font-medium cursor-pointer"
                >
                  {isGramToRatti ? "Grams to Ratti" : "Ratti to Grams"}
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
                    {entry.outputUnit} ({entry.rattiType})
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {entry.timestamp}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </div>
        )}

        <div className="space-y-3 pt-2">
          <Label className="text-base font-medium">Quick Reference Table</Label>
          <ScrollArea className="h-[150px] w-full border border-slate-200 rounded-md bg-white dark:bg-gray-900">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-slate-900 dark:text-slate-100">
                    Grams
                  </TableHead>
                  <TableHead className="text-slate-900 dark:text-slate-100">
                    Ratti ({rattiType})
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-slate-700 dark:text-slate-300">
                      {row.gram}
                    </TableCell>
                    <TableCell className="text-slate-700 dark:text-slate-300">
                      {row.ratti}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col text-center border-t pt-4 pb-6 px-6 text-xs text-muted-foreground">
        <p>
          This tool provides accurate gram to ratti conversions based on
          standard and regional rates. Always verify regional ratti values for
          critical applications.
        </p>
      </CardFooter>
    </Card>
  );
}
