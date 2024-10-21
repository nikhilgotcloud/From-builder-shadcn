import React from 'react'
import { Button } from '@/components/ui/button'
import If from '@/components/ui/if'

type FieldSelectorProps = {
  addFormField: (type: string) => void
}
type fieldTypes = { name: string; isNew: boolean }

const fieldTypes: fieldTypes[] = [
  { name: 'Input', isNew: false },
  { name: 'Textarea', isNew: false },
  { name: 'Password', isNew: false },
  { name: 'Phone', isNew: false },
  { name: 'InputOTP', isNew: false },
  { name: 'DatePicker', isNew: false },
  { name: 'FileInput', isNew: false },
  { name: 'Select', isNew: false },
  { name: 'Slider', isNew: false },
  { name: 'Switch', isNew: false },
  { name: 'Checkbox', isNew: false },
  { name: 'Combobox', isNew: false },
  // { name: "Tags", isNew: false },
  // { name: "Multi Select", isNew: false },
]
const colors = [
  'bg-red-200 text-red-700',
  'bg-blue-200 text-blue-700',
  'bg-green-200 text-green-700',
  'bg-yellow-200 text-yellow-700',
  'bg-purple-200 text-purple-700',
  'bg-pink-200 text-pink-700',
  'bg-teal-200 text-teal-700',
  'bg-orange-200 text-orange-700',
  'bg-indigo-200 text-indigo-700',
  'bg-lime-200 text-lime-700',
  'bg-cyan-200 text-cyan-700',
  'bg-amber-200 text-amber-700',
]

export const FieldSelector: React.FC<FieldSelectorProps> = ({
  addFormField,
}) => {
  return (
    <div className="flex md:flex-col items-start flex-wrap gap-3">
      {fieldTypes.map((type , index) => (
        // eslint-disable-next-line react/jsx-key
        <div className="flex items-center gap-1">
          <Button
            key={type.name}
            variant="outline"
            onClick={() => addFormField(type.name)}
            className={`rounded-xl shadow-sm hover:bg-opacity-90 hover:shadow-md font-bold ${colors[index % colors.length]}`}
          >
            {type.name}
            <If
              condition={type.isNew}
              render={() => (
                <div className="md:hidden ml-1 text-[10px] p-1 bg-yellow-200 rounded">
                  New
                </div>
              )}
            />
          </Button>
          <If
            condition={type.isNew}
            render={() => (
              <div className="hidden md:block ml-1 text-[10px] p-1 bg-yellow-200 rounded">
                New
              </div>
            )}
          />
        </div>
      ))}
     
    </div>
  )
}
