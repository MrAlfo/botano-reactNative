import { ImageCardProps } from "@/constants/types";
import * as React from "react";


export function ImageCard({ src, alt, width, aspectRatio, className }: ImageCardProps) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
      style={{ width, aspectRatio }}
    />
  );
}