import React, { useEffect, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { MoveRight, X } from "lucide-react";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { Slider } from "../ui/slider";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { prices } from "@/lib/constants";
import PropTypes from "prop-types";

const PopoverRange = ({ name, label, options = [], _name }) => {
  const form = useForm({
    defaultValues: {
      price: [0, 100],
    },
  });

  const triggerRef = useRef(null);
  const [widthContent, setWidthContent] = useState(0);
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
            <X size={16} />
          </Button>
        </div>
        <div className="p-4 space-y-4 max-h-[250px] overflow-y-auto ">
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <p className="text-xs font-bold mb-2">{`${label} thấp nhất`}</p>
              <Input placeholder="Từ" className="w-[100px]" />
            </div>
            <MoveRight size={16} className="mt-6" />
            <div className="flex flex-col items-center">
              <p className="text-xs font-bold mb-2">{`${label} cao nhất`}</p>
              <Input placeholder="Đến" className="w-[90px]" />
            </div>
          </div>
          <div>
            <Form {...form}>
              <FormField
                name="price"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="py-8">
                    <FormControl>
                      <Slider
                        value={field.value}
                        onValueChange={(val) => form.setValue(name, val)}
                        max={100}
                        min={0}
                        step={1}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Form>
            <Form {...form}>
              <FormField
                name={_name}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        {options.map((el) => (
                          <FormItem
                            className="flex items-center justify-between"
                            key={el.id}
                          >
                            <FormLabel>{el.label}</FormLabel>
                            <FormControl>
                              <RadioGroupItem value={el.value} />
                            </FormControl>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </Form>
          </div>
        </div>
        <div className="flex items-center border-t p-4 h-[57px] justify-end">
          <Button>Áp dụng</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverRange;

PopoverRange.prototype = {
  name: PropTypes.string.isRequired,
  _name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};
