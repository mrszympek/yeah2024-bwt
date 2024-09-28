import {
  RadioGroupItem,
  FormControl,
  FormMessage,
  RadioGroup,
  FormField,
  FormLabel,
  FormItem,
} from '@/shared/components';
import { FieldValues, Control, Path } from 'react-hook-form';
import { cn } from '@/shared/utils';

export type RadioGroupData = {
  disabled?: boolean;
  value: string;
  label: string;
}[];
interface IFormRadioGroupProps<T extends FieldValues = FieldValues> {
  formControl: Control<T>;
  data: RadioGroupData;
  name: Path<T>;
}

export function FormRadioGroup<T extends FieldValues>({
  formControl,
  data,
  name,
}: IFormRadioGroupProps<T>) {
  return (
    <FormField
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormControl>
            <RadioGroup
              className="flex flex-col space-y-1"
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              {data.map((item) => (
                <FormItem
                  className={cn(`flex items-center space-x-3 space-y-0`, {
                    'text-muted-foreground': item.disabled,
                  })}
                  key={item.label}
                >
                  <FormControl>
                    <RadioGroupItem
                      disabled={item.disabled}
                      value={item.value}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      control={formControl}
      name={name}
    />
  );
}
