"use client";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLinkStore } from "@/lib/link-store";
import { Copy, ExternalLink } from "lucide-react";
import { useAuthStore } from "@/lib/auth-store";

interface UrlShortenerFormProps {
  onAuthRequired: () => void;
}

export function UrlShortenerForm({ onAuthRequired }: UrlShortenerFormProps) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [message, setMessage] = useState("");
  const [lastShortenedUrl, setLastShortenedUrl] = useState("");
  const [origin, setOrigin] = useState("");
  const { createLink, isLoading, existsShortCode } = useLinkStore();
  const { user } = useAuthStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  useEffect(() => {
    setError("");
    setMessage("");
    (async () => {
      if (customCode) {
        const exists = await existsShortCode(customCode);
        console.log("exists", exists);
        if (exists) {
          setError("The custom code is already in use");
        } else {
          setMessage("Valid!");
        }
      }
    })();
  }, [customCode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!user) {
      onAuthRequired();
      return;
    }

    if (!originalUrl) {
      setError("Please enter a URL");
      return;
    }

    try {
      new URL(originalUrl);
    } catch {
      setError("Please enter a valid URL");
      return;
    }

    const result = await createLink({ originalUrl, optionalCode: customCode });
    if (result) {
      const url = `https://www.midomino/${result.shortCode}`;
      setSuccess("Link shortened successfully!");
      setLastShortenedUrl(url);
      setOriginalUrl("");
      setCustomCode("");
    } else {
      setError("Error shortening the URL");
    }
  };

  const copyToClipboard = async () => {
    if (lastShortenedUrl) {
      await navigator.clipboard.writeText(lastShortenedUrl);
      setSuccess("Link copied to clipboard!");
    }
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Shorten your link</CardTitle>
        <CardDescription className="text-lg">
          Turn long URLs into short, easy-to-share links
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="originalUrl">URL to shorten</Label>
            <Input
              id="originalUrl"
              type="url"
              placeholder="https://example.com/my-very-long-link"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              disabled={isLoading}
              className="text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="customCode">Custom code (optional)</Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">{origin}/</span>
              <Input
                id="customCode"
                type="text"
                placeholder="my-code"
                maxLength={10}
                value={customCode}
                onChange={(e) =>
                  setCustomCode(e.target.value.replace(/[^a-z0-9-]/g, ""))
                }
                disabled={isLoading}
                className="flex-1"
              />
            </div>
          </div>
          <div className="mb-2 flex  items-center h-2">
            {error && <p className="text-sm text-destructive">{error}</p>}
            {message && <p className="text-sm text-green-600">{message}</p>}
          </div>
          <Button
            type="submit"
            className={`w-full ${error ? "pointer-events-none" : ""}`}
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Shortening..." : "Shorten Link"}
          </Button>
        </form>

        {success && lastShortenedUrl && (
          <div className="p-4 bg-muted rounded-lg space-y-3">
            <p className="text-sm font-medium text-green-600">{success}</p>
            <div className="flex items-center space-x-2 p-3 bg-background rounded border">
              <span className="flex-1 font-mono text-sm">
                {lastShortenedUrl}
              </span>
              <Button size="sm" variant="outline" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a
                  href={lastShortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
