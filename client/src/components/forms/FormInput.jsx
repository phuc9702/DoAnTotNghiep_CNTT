import { Input } from "@/components/ui/input"
import { FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { placeholderCn, resetOutline } from "@/lib/className"
import PropTypes from 'prop-types'
import { cn } from "@/lib/utils"


const FormInput = ({form,label, name,type='text', placeholder }) => {
  return (
    <FormField
        name= {name}
        control={form.control}
        render={({field}) => (
            <FormItem>
                {label && <FormLabel>{label}</FormLabel> }
                <FormControl>
                    <Input placeholder={placeholder} type={type} className={cn(resetOutline, placeholderCn)} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
  )
}

export default FormInput
FormInput.propTypes = {
    form:PropTypes.shape({
        control: PropTypes.any.isRequired
    }),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", 'password']),
}
