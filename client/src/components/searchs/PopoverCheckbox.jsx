import { useEffect, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";

const PopoverCheckbox = ({ label, options = [], name }) => {
  const triggerRef = useRef(null);
  const [widthContent, setWidthContent] = useState(0);
  const from = useForm({
    defaultValues: {
      [name]: [""],
    },
  });
  useEffect(() => {
    if (triggerRef.current) {
      const width = triggerRef.current.getBoundingClientRect()?.width;
      setWidthContent(width);
    }
  }, []);
  return (
    <Popover>
      <PopoverTrigger ref={triggerRef} className="border  rounded-md py-2 px-4">
        {label}
      </PopoverTrigger>
      <PopoverContent
        style={{ width: `${widthContent}px` }}
        className="p-0 relative h-[364px] "
      >
        <div className="p-4 flex font-bold items-center justify-center border-b">
          <p>{label}</p>
          <Button
            className="absolute right-1 top-1 bottom-0"
            variant="transparent"
          >
            <X className="text-red-600" size={16} />
          </Button>
        </div>
        <div className="p-4 space-y-4 max-h-[250px] overflow-y-auto ">
          <Form {...from}>
            <FormField
              name={name}
              control={from.control}
              render={() => (
                <FormItem>
                  {options.map((el) => (
                    <FormField
                      key={el.id}
                      name={name}
                      control={from.control}
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <FormLabel>{el.label}</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(el.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, el.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== el.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  ))}
                </FormItem>
              )}
            />
          </Form>
        </div>
        <div className="flex items-center border-t p-4 h-[57px] justify-end">
          <Button>Áp dụng</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCheckbox;
PopoverCheckbox.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
