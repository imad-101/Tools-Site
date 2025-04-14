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

// Conversion rates: 1 gram to bhari
const CONVERSION_RATES: Record<string, number> = {
  northIndia: 1 / 11.66, // 1 gram = 0.0858 bhari (1 bhari = 11.66g)
  southIndia: 1 / 11.7, // 1 gram = 0.0855 bhari (1 bhari = 11.7g)
};

// Visual guide data: Approximate coin sizes for bhari equivalents
const VISUAL_GUIDE = [
  { bhari: 1, equivalent: "≈ 1 Indian 10-rupee coin (11.6g)" },
  { bhari: 2, equivalent: "≈ 2 Indian 10-rupee coins (23.2g)" },
  { bhari: 5, equivalent: "≈ 5 Indian 10-rupee coins (58g)" },
  { bhari: 10, equivalent: "≈ 10 Indian 10-rupee coins (116g)" },
];

type ConversionEntry = {
  inputValue: number;
  outputValue: number;
  inputUnit: string;
  outputUnit: string;
  bhariStandard: string;
  timestamp: string;
};

export default function GramToBhariConverter() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [bhariStandard, setBhariStandard] = useState("northIndia");
  const [isGramToBhari, setIsGramToBhari] = useState(true);
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
      if (isGramToBhari) {
        result = value * CONVERSION_RATES[bhariStandard];
      } else {
        result = value / CONVERSION_RATES[bhariStandard];
      }
      setOutputValue(result.toFixed(decimalPlaces));
    } else {
      setOutputValue("");
    }
  }, [inputValue, bhariStandard, isGramToBhari, decimalPlaces]);

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
          inputUnit: isGramToBhari ? "grams" : "bhari",
          outputUnit: isGramToBhari ? "bhari" : "grams",
          bhariStandard,
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
    setBhariStandard("northIndia");
    setIsGramToBhari(true);
    setDecimalPlaces(4);
    setHistory([]);
    showNotification("Reset successful", "success");
  };

  // Static conversion table data
  const tableData = Array.from({ length: 10 }, (_, i) => {
    const gram = (i + 1) * 10; // 10g to 100g
    const bhariValue = (gram * CONVERSION_RATES[bhariStandard]).toFixed(4);
    return { gram, bhari: bhariValue };
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
                Enter Weight in {isGramToBhari ? "Grams" : "Bhari"}
              </Label>
              <Input
                id="input-value"
                type="text"
                placeholder={`e.g., ${isGramToBhari ? "50" : "4.29"}`}
                value={inputValue}
                onChange={handleInputChange}
                className="transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="bhari-standard" className="text-base font-medium">
                Bhari Standard
              </Label>
              <Select value={bhariStandard} onValueChange={setBhariStandard}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select bhari standard" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="northIndia">
                    North India (11.66g)
                  </SelectItem>
                  <SelectItem value="southIndia">
                    South India (11.7g)
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
                Result in {isGramToBhari ? "Bhari" : "Grams"}
              </Label>
              <div className="flex items-center justify-between p-3 bg-yellow-50/50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-md">
                <span className="text-yellow-950 dark:text-yellow-100 font-serif">
                  {outputValue
                    ? `${outputValue} ${isGramToBhari ? "bhari" : "grams"}`
                    : `Enter ${
                        isGramToBhari ? "grams" : "bhari"
                      } to see result`}
                </span>
                <Badge variant="secondary">
                  {bhariStandard === "northIndia"
                    ? "North India"
                    : "South India"}
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
                  checked={isGramToBhari}
                  onCheckedChange={setIsGramToBhari}
                />
                <Label
                  htmlFor="conversion-direction"
                  className="font-medium cursor-pointer"
                >
                  {isGramToBhari ? "Grams to Bhari" : "Bhari to Grams"}
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
                    {entry.outputUnit} ({entry.bhariStandard})
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
                    Bhari ({bhariStandard})
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
                      {row.bhari}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>

        <div className="space-y-3 pt-2">
          <Label className="text-base font-medium">
            Visual Guide (Coin Equivalents)
          </Label>
          <ScrollArea className="h-[150px] w-full border border-slate-200 rounded-md p-3 bg-white dark:bg-gray-900">
            {VISUAL_GUIDE.map((item, index) => (
              <div
                key={index}
                className="py-2 border-b border-slate-100 dark:border-slate-700 last:border-0"
              >
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {item.bhari} Bhari ({bhariStandard}) ≈ {item.equivalent}
                </p>
              </div>
            ))}
          </ScrollArea>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col text-center border-t pt-4 pb-6 px-6 text-xs text-muted-foreground">
        <p>
          This tool provides accurate gram to bhari conversions based on North
          and South India standards. Always verify regional bhari values for
          critical applications.
        </p>
      </CardFooter>
    </Card>
  );
}
