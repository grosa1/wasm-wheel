/// <reference path="../../../node_modules/assemblyscript/assembly.d.ts" />

declare function random(): number;

export function name(): string {
  return "TypeScript";
}

export function feelingLucky(): number {
  return floor(random() * 100) + 1;
}