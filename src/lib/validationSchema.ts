/**
 * Provides form validation utility methods.
 */
export abstract class FormValidators {
  /**
   * Checks if a value is required.
   * @param value - The value to check.
   * @returns The error message 'ERROR_REQUIRED' if the value is empty or undefined, otherwise undefined.
   */
  static required(value: any) {
    if (typeof value === "string") {
      return value?.trim() ? undefined : "Required";
    }
    return value ? undefined : "Required";
  }

  /**
   * Checks if a value is a valid email address.
   * @param value - The value to check.
   * @returns The error message 'ERROR_INVALID_EMAIL' if the value is not a valid email address, otherwise undefined.
   */
  static email(value: string) {
    return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? "Email Required"
      : undefined;
  }

  /**
   * Checks if a value has a minimum length.
   * @param min - The minimum length required.
   * @returns A function that takes a value and returns the error message 'ERROR_MIN_LENGTH' if the length is less than min, otherwise undefined.
   */
  static minLength(min: number) {
    return (value: string | any[]) =>
      (value?.length ?? 0) < min ? "Rrequired atleast 8 digits" : undefined;
  }
  /**
   * Checks if a value has a maximum length.
   * @param max - The maximum length allowed.
   * @returns A function that takes a value and returns the error message 'ERROR_MAX_LENGTH' if the length is greater than max, otherwise undefined.
   */

  static maxLength(max: number) {
    return (value: string | any[]) =>
      (value?.length ?? 0) > max ? "Rrequired atleast 8 digits" : undefined;
  }

  /**
   * Composes multiple validators into a single validator function.
   * @param validators - The validators to compose.
   * @returns A function that takes a value and applies all validators, returning the first error message encountered, or undefined if all validators pass.
   */
  static compose(...validators: ((value: any) => any | undefined)[]) {
    return (value: any) =>
      validators.reduce(
        (error: string | undefined, validator) => error || validator(value),
        undefined
      );
  }

  /**
   * checks if a string is a valid number
   * @param str
   * @returns
   */
  static isNumeric(str: any) {
    if (typeof str != "string") return false; // we only process strings!
    if (
      !isNaN(Number(str)) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str)) && // ...and ensure strings of whitespace fail
      !str.includes("e") && // no exponential notations allowed
      !str.includes("E")
    ) {
      return undefined;
    } else {
      return "Value should be a number";
    }
  }

  /**
   * check if a number is decimal
   * @param value
   * @returns undefined | error message
   */
  static isDecimal(value: number) {
    return value?.toString().indexOf(".") === -1 ? undefined : "ERROR_DECIMAL";
  }
}
