import { AbstractControl } from '@angular/forms';

export function numberRangeValidator(min: number | null, max: number | null): any {
    return (control: AbstractControl) => {
        if ((min != null) && max && control.value) {
            const val: number = control.value;
            if (isNaN(val)) {
                return {
                    numberRange: {
                        valid: false,
                        minValue: min,
                        maxValue: max
                    }
                };
            }
            if (val < min || val > max) {
                return {
                    numberRange: {
                        valid: false,
                        minValue: min,
                        maxValue: max
                    }
                };
            }
        }
        return null;
    };
}

export function isNonEmptyOrSpace(control: AbstractControl, customErrorKey?: string): any {
    if (control.value && control.value.trim().length === 0) {
        return {
            [customErrorKey || 'isEmptyOrWhiteSpace']: {
                isTexValid: { valid: false }
            }
        };
    }
    return null;
}
