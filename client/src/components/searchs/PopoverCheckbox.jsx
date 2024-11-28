import { useEffect, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { apiCheckNewUser } from "@/apis/auth"; // API kiểm tra người dùng trong cơ sở dữ liệu

const PopoverCheckbox = ({ label, options = [], name, onSave }) => {
  const triggerRef = useRef(null);
  const [widthContent, setWidthContent] = useState(0);

  const from = useForm({
    defaultValues: {
      [name]: [], // Giữ giá trị mặc định là mảng rỗng
    },
  });

  useEffect(() => {
    if (triggerRef.current) {
      const width = triggerRef.current.getBoundingClientRect()?.width;
      setWidthContent(width);
    }
  }, []);

  const handleSave = async (data) => {
    // Gửi thông tin đã chọn cho server
    const selectedValues = data[name];
    try {
      const response = await apiCheckNewUser(selectedValues); // API kiểm tra người dùng từ CSDL
      if (response.data.exists) {
        // Nếu người dùng tồn tại, thực hiện hành động thích hợp
        onSave(response.data.user);
      } else {
        // Nếu người dùng không tồn tại, gửi thông báo lỗi
        toast.error("Người dùng không tồn tại");
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };

  return (
    <Popover>
      <PopoverTrigger ref={triggerRef} className="border rounded-md py-2 px-4">
        {label}
      </PopoverTrigger>
      <PopoverContent
        style={{ width: `${widthContent}px` }}
        className="p-0 relative h-[364px]"
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
          <Button onClick={from.handleSubmit(handleSave)}>Áp dụng</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

PopoverCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired, // Hàm để lưu lại dữ liệu sau khi áp dụng
};

export default PopoverCheckbox;
