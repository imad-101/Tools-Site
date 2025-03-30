"use client";

import type React from "react";
import { useState } from "react";
import nlp from "compromise";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Copy, RotateCcw, Sparkles, Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Basic dictionary for word-level replacement (Modern → stylized Old English)
const OLD_ENGLISH_WORDS: Record<string, string> = {
  the: "þe",
  you: "þu",
  your: "þin",
  yours: "þinra",
  i: "ic",
  my: "min",
  mine: "min",
  we: "wē",
  our: "ūr",
  they: "þā",
  their: "þāra",
  them: "þām",
  and: "ond",
  with: "wiþ",
  for: "for",
  from: "fram",
  to: "to",
  in: "in",
  on: "on",
  at: "æt",
  by: "bi",
  of: "of",
  that: "þæt",
  this: "þis",
  these: "þās",
  those: "þā",
  here: "hēr",
  there: "þǣr",
  where: "hwǣr",
  what: "hwæt",
  who: "hwa",
  when: "hwænne",
  why: "hwī",
  how: "hū",
  man: "mann",
  woman: "wīf",
  child: "cild",
  children: "cildru",
  people: "folc",
  friend: "frēond",
  house: "hūs",
  home: "hām",
  land: "land",
  water: "wæter",
  fire: "fȳr",
  earth: "eorþe",
  sky: "heofon",
  sun: "sunne",
  moon: "mōna",
  star: "steorra",
  day: "dæg",
  night: "niht",
  morning: "morgen",
  evening: "æfen",
  time: "tīma",
  year: "gēar",
  month: "mōnaþ",
  week: "wicu",
  good: "gōd",
  evil: "yfel",
  great: "grēat",
  small: "smæl",
  old: "eald",
  new: "nīwe",
  young: "geong",
  long: "lang",
  short: "scort",
  high: "hēah",
  low: "lāw",
  strong: "strang",
  weak: "wāc",
  true: "sōþ",
  false: "lēas",
  life: "līf",
  death: "dēaþ",
  love: "lufu",
  hate: "hatian",
  war: "wīg",
  peace: "friþ",
  god: "god",
  lord: "hlāford",
  king: "cyning",
  queen: "cwēn",
  knight: "cniht",
  sword: "sweord",
  shield: "scyld",
  battle: "gefeoht",
  victory: "sige",
  defeat: "forloren",
  kingdom: "rīce",
  power: "miht",
  wisdom: "wīsdom",
  knowledge: "cnāwledge",
  book: "bōc",
  word: "word",
  name: "nama",
  speak: "sprecan",
  say: "secgan",
  tell: "tellan",
  hear: "hīeran",
  see: "sēon",
  look: "lōcian",
  find: "findan",
  seek: "sēcan",
  come: "cuman",
  go: "gān",
  walk: "gangan",
  run: "yrnan",
  stand: "standan",
  sit: "sittan",
  lie: "licgan",
  sleep: "slǣpan",
  wake: "wæcnan",
  eat: "etan",
  drink: "drincan",
  live: "libban",
  die: "steorfan",
  kill: "cwellan",
  fight: "feohtan",
  win: "winnan",
  lose: "forlēosan",
  begin: "beginnan",
  end: "endian",
  make: "macian",
  build: "byldan",
  break: "brecan",
  give: "giefan",
  take: "niman",
  hold: "healdan",
  let: "lǣtan",
  call: "clipian",
  answer: "andswarian",
  ask: "āscian",
  think: "þencan",
  know: "witan",
  understand: "understandan",
  remember: "gemunan",
  forget: "forgietan",
  believe: "gelīefan",
  hope: "hōpian",
  fear: "ondrǣdan",
};

// Spelling patterns to refine conversion
const OLD_ENGLISH_PATTERNS: [RegExp, string][] = [
  [/th/g, "þ"],
  [/Th/g, "Þ"],
  [/ck/g, "c"],
  [/qu/g, "cw"],
  [/sh/g, "sc"],
  [/wh/g, "hw"],
  [/gh/g, "h"],
  [/ght/g, "ht"],
  [/ough/g, "oh"],
  [/tion\b/g, "tioun"],
  [/sion\b/g, "sioun"],
  [/ing\b/g, "yng"],
  [/ed\b/g, "d"],
  [/ness\b/g, "nesse"],
];

// Optional introductory Old English phrases
const OLD_ENGLISH_PHRASES: string[] = [
  "Forsooth, ",
  "Verily, ",
  "In sooth, ",
  "By my troth, ",
  "Hark, ",
  "Lo, ",
  "Prithee, ",
  "I pray thee, ",
];

// Extra adjectives to spice up Artistic conversions
const EXTRA_ADJECTIVES = [
  "bawbling",
  "occulted",
  "enchanting",
  "whimsical",
  "eldritch",
  "mystical",
];

/**
 * Reorders a sentence for an Old English flavor.
 * If preserveStructure is true, the sentence order remains unchanged.
 */
function reorderSentence(sentence: string, preserveStructure: boolean): string {
  if (preserveStructure) return sentence;
  const doc = nlp(sentence);
  const verbs = doc.verbs().out("array");
  if (verbs.length > 0) {
    const firstVerb = verbs[0];
    if (!sentence.trim().toLowerCase().startsWith(firstVerb.toLowerCase())) {
      // Remove first occurrence of the verb and move it to the front.
      const regex = new RegExp(`\\b${firstVerb}\\b`, "i");
      const modified = sentence.replace(regex, "").trim();
      return firstVerb + " " + modified;
    }
  }
  return sentence;
}

/**
 * Adjusts verb forms (a very basic heuristic).
 */
function adjustVerbForm(word: string): string {
  if (word.match(/^[a-z]+s$/i)) {
    return word.replace(/s$/i, "þ");
  }
  return word;
}

/**
 * Enhances adjectives by randomly inserting an extra adjective.
 */
function enhanceAdjectivesInText(text: string, level: number): string {
  const doc = nlp(text);
  doc.adjectives().forEach((adj) => {
    if (Math.random() * 100 < level / 2) {
      const extra =
        EXTRA_ADJECTIVES[Math.floor(Math.random() * EXTRA_ADJECTIVES.length)];
      // Prepend extra adjective before the original adjective.
      const newAdj = extra + " " + adj.text();
      adj.replaceWith(newAdj);
    }
  });
  return doc.text();
}

export default function ModernToOldEnglishConverter() {
  // Conversion options:
  const conversionStyles = ["Basic", "Enhanced", "Artistic"];
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [archaicLevel, setArchaicLevel] = useState([50]);
  const [addPhrases, setAddPhrases] = useState(true);
  const [preserveStructure, setPreserveStructure] = useState(false);
  const [conversionStyle, setConversionStyle] = useState("Enhanced");
  const [enhanceAdjectives, setEnhanceAdjectives] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard
      .writeText(outputText)
      .then(() => showNotification("Copied to clipboard", "success"))
      .catch(() => showNotification("Failed to copy text", "error"));
  };

  const handleReset = () => {
    setInputText("");
    setOutputText("");
    setArchaicLevel([50]);
    setAddPhrases(true);
    setPreserveStructure(false);
    setConversionStyle("Enhanced");
    setEnhanceAdjectives(false);
  };

  const convertToOldEnglish = () => {
    if (!inputText.trim()) return;
    let result = inputText;
    const level = archaicLevel[0];

    // Option: For Basic conversion, only do simple word substitution.
    // Enhanced and Artistic do additional transformations.
    if (conversionStyle !== "Basic") {
      // Step 1: Word-level transformation using dictionary replacements.
      const words = result.split(/\b/);
      result = words
        .map((word) => {
          const lower = word.toLowerCase();
          if (OLD_ENGLISH_WORDS[lower] && Math.random() * 100 < level) {
            let converted = OLD_ENGLISH_WORDS[lower];
            if (word[0] === word[0].toUpperCase()) {
              converted =
                converted.charAt(0).toUpperCase() + converted.slice(1);
            }
            return converted;
          }
          return word;
        })
        .join("");
      // Step 2: Apply spelling patterns.
      const patternsToApply = Math.floor(
        (OLD_ENGLISH_PATTERNS.length * (level - 20)) / 80
      );
      for (let i = 0; i < patternsToApply; i++) {
        const [pattern, replacement] = OLD_ENGLISH_PATTERNS[i];
        result = result.replace(pattern, replacement);
      }
      // Step 3: Adjust verb forms.
      result = result
        .split(/\s+/)
        .map((word) => adjustVerbForm(word))
        .join(" ");
      // Step 4: Reorder sentences if not preserving structure.
      result = result
        .split(/(?<=[.!?])\s+/)
        .map((sentence) => reorderSentence(sentence, preserveStructure))
        .join(" ");
      // Step 5: Optionally add introductory phrases.
      if (addPhrases && level >= 70) {
        result = result
          .split(/(?<=[.!?])\s+/)
          .map((sentence) => {
            if (sentence.trim() && Math.random() * 100 < level - 70) {
              const randomPhrase =
                OLD_ENGLISH_PHRASES[
                  Math.floor(Math.random() * OLD_ENGLISH_PHRASES.length)
                ];
              return (
                randomPhrase +
                sentence.charAt(0).toLowerCase() +
                sentence.slice(1)
              );
            }
            return sentence;
          })
          .join(" ");
      }
      // Step 6: If Artistic style and adjective enhancement is enabled, spice up adjectives.
      if (conversionStyle === "Artistic" && enhanceAdjectives) {
        result = enhanceAdjectivesInText(result, level);
      }
    } else {
      // For Basic style: simply perform dictionary substitution.
      result = result
        .split(/\b/)
        .map((word) => {
          const lower = word.toLowerCase();
          if (OLD_ENGLISH_WORDS[lower]) {
            let converted = OLD_ENGLISH_WORDS[lower];
            if (word[0] === word[0].toUpperCase()) {
              converted =
                converted.charAt(0).toUpperCase() + converted.slice(1);
            }
            return converted;
          }
          return word;
        })
        .join("");
    }
    setOutputText(result);
  };

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

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="input-text" className="text-base font-medium">
              Enter Modern English Text
            </Label>
            <span className="text-xs text-muted-foreground">
              {inputText.length} characters
            </span>
          </div>
          <Textarea
            id="input-text"
            placeholder="Type or paste your text here..."
            value={inputText}
            onChange={handleInputChange}
            className="min-h-[150px] resize-y transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="archaic-level"
                  className="text-base font-medium"
                >
                  Archaic Level
                </Label>
                <Badge variant="secondary" className="font-mono">
                  {archaicLevel[0]}%
                </Badge>
              </div>
              <Slider
                id="archaic-level"
                min={10}
                max={100}
                step={10}
                value={archaicLevel}
                onValueChange={setArchaicLevel}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Modern</span>
                <span>Ancient</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="conversion-style"
                className="text-base font-medium"
              >
                Conversion Style
              </Label>
              <Select
                value={conversionStyle}
                onValueChange={setConversionStyle}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  {conversionStyles.map((style) => (
                    <SelectItem key={style} value={style}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="text-xs text-muted-foreground italic">
                {conversionStyle === "Basic" && "Simple word substitution only"}
                {conversionStyle === "Enhanced" &&
                  "Word substitution with spelling patterns and sentence restructuring"}
                {conversionStyle === "Artistic" &&
                  "Full transformation with creative embellishments"}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <Label className="text-base font-medium">Options</Label>
              <div className="space-y-3 bg-muted/30 p-3 rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="preserve-structure"
                      checked={preserveStructure}
                      onCheckedChange={setPreserveStructure}
                    />
                    <Label
                      htmlFor="preserve-structure"
                      className="font-medium cursor-pointer"
                    >
                      Preserve Sentence Structure
                    </Label>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-xs">
                          When enabled, sentences will maintain their original
                          structure rather than being reordered in Old English
                          style.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="add-phrases"
                      checked={addPhrases}
                      onCheckedChange={setAddPhrases}
                    />
                    <Label
                      htmlFor="add-phrases"
                      className="font-medium cursor-pointer"
                    >
                      Add Old English Phrases
                    </Label>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-xs">
                          Adds introductory phrases like "Forsooth," and
                          "Verily," to sentences.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {conversionStyle === "Artistic" && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="enhance-adjectives"
                        checked={enhanceAdjectives}
                        onCheckedChange={setEnhanceAdjectives}
                      />
                      <Label
                        htmlFor="enhance-adjectives"
                        className="font-medium cursor-pointer"
                      >
                        Enhance Adjectives
                      </Label>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">
                            Adds colorful Old English adjectives to enhance
                            descriptions.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            onClick={convertToOldEnglish}
            className="flex-1 py-6 text-base font-medium transition-all duration-200 hover:scale-[1.02] bg-gradient-to-r from-primary to-primary/90"
            disabled={!inputText.trim()}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Convert to Old English
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

        {outputText && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="output-text" className="text-base font-medium">
                Old English Result
              </Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="flex items-center h-8"
              >
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </Button>
            </div>
            <Textarea
              id="output-text"
              value={outputText}
              readOnly
              className="min-h-[150px] resize-y font-serif bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900 text-amber-950 dark:text-amber-100"
            />
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col text-center border-t pt-4 pb-6 px-6 text-xs text-muted-foreground">
        <p>
          This tool creates a stylized Old English transformation using
          linguistic patterns and rules. While enhanced with various options, it
          may not fully capture all authentic historical nuances.
        </p>
      </CardFooter>
    </Card>
  );
}
