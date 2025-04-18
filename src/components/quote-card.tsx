
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface QuoteCardProps {
  quote: string;
  author: string;
  className?: string;
}

export function QuoteCard({ quote, author, className }: QuoteCardProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-6">
        <div className="relative">
          <div className="absolute -top-6 -left-4 text-8xl opacity-10 font-serif">"</div>
          <blockquote className="relative z-10">
            <p className="text-lg italic mb-4">{quote}</p>
            <footer className="text-right text-sm opacity-75">— {author}</footer>
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
}

const MOTIVATIONAL_QUOTES = [
  {
    quote: "The pain you feel today is the strength you feel tomorrow.",
    author: "Alpha Mindset"
  },
  {
    quote: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln"
  },
  {
    quote: "The only bad workout is the one that didn't happen.",
    author: "Unknown"
  },
  {
    quote: "Your body can stand almost anything. It's your mind that you have to convince.",
    author: "David Goggins"
  },
  {
    quote: "Pain is temporary, quitting lasts forever.",
    author: "Lance Armstrong"
  },
  {
    quote: "The difference between try and triumph is a little umph.",
    author: "Marvin Phillips"
  }
];

export function RandomQuoteCard({ className }: { className?: string }) {
  const randomQuote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
  return <QuoteCard quote={randomQuote.quote} author={randomQuote.author} className={className} />;
}
