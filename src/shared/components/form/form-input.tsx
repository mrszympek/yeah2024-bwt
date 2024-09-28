import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Input,
} from '@/shared/components';
import { FieldValues, Control, Path } from 'react-hook-form';
import { UserIcon } from 'lucide-react';
import { cn } from '@/shared/utils';

interface IFormInputProps<T extends FieldValues = FieldValues> {
  type?: 'password' | 'text';
  formControl: Control<T>;
  placeholder: string;
  disabled?: boolean;
  name: Path<T>;
}

export function FormInput<T extends FieldValues>({
  placeholder,
  formControl,
  type = 'text',
  disabled,
  name,
}: IFormInputProps<T>) {
  return (
    <FormField
      render={({ field }) => (
        <FormItem className="relative z-0">
          <FormControl>
            <>
              <Input
                {...field}
                disabled={disabled}
                id={field.name}
                placeholder=""
                type={type}
              />
              <FormLabel
                className={cn(
                  'z-10 absolute text-sm text-muted-foreground duration-300 left-4 transform -translate-y-3 scale-75 top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-disabled:z-0 cursor-text peer-autofill:scale-75',
                )}
                htmlFor={field.name}
              >
                {placeholder}
              </FormLabel>
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      control={formControl}
      name={name}
    />
  );
}
