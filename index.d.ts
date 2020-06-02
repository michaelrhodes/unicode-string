declare module 'unicode-string' {
  function chars(string: string): Array<string>;

  function length(string: string): number;

  function substr(string: string, start: number, length: number): string;

  function substring(string: string, start: number, end: number): string;

  export { chars, length, substr, substring };
}
