'use client'

import React, { useState } from 'react'
import { Link } from 'next-view-transitions'

import { FormFieldType } from '@/types'
import { Separator } from '@/components/ui/separator'
import { FieldSelector } from '@/screens/field-selector'
import { FormFieldList } from '@/screens/form-field-list'
import { FormPreview } from '@/screens/form-preview'
import { EditFieldDialog } from '@/screens/edit-field-dialog'

import { useMediaQuery } from '@/hooks/use-media-query'

export default function FormBuilder() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const [formFields, setFormFields] = useState<FormFieldType[]>([])
  const [selectedField, setSelectedField] = useState<FormFieldType | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const addFormField = (type: string) => {
    const newField: FormFieldType = {
      type,
      label: `New ${type}`,
      value: '',
      checked: true,
      name: `name_${Math.random().toString().slice(-10)}`, // Set default name
      placeholder: 'Enter Placeholder',
      description: '',
      required: true,
      disabled: false,
      onChange: handleChange,
      setValue: () => {},
      onSelect: () => {},
    }
    setFormFields([...formFields, newField])
  }

  const updateFormField = (index: number, updates: Partial<FormFieldType>) => {
    const updatedFields = [...formFields]
    updatedFields[index] = { ...updatedFields[index], ...updates }
    setFormFields(updatedFields)
  }

  const openEditDialog = (field: FormFieldType) => {
    setSelectedField(field)
    setIsDialogOpen(true)
  }

  const handleSaveField = (updatedField: FormFieldType) => {
    const index = formFields.findIndex(
      (field) => field.label === selectedField?.label,
    )
    if (index !== -1) {
      updateFormField(index, updatedField)
    }
    setIsDialogOpen(false)
  }

  // Define the handleChange function
  const handleChange = () => {
    // Your onChange logic here
  }

  return (
    <section className="max-h-screen space-y-8">
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-2xl font-semibold text-blue-600 mt-2">FormGenie  </h1>
        <p>Drag-and-Drop Form Generator with Code Export</p>
          <p> <b>Select the field type from left and edit the form accordingly and Get code by clicking on Code tab</b></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:px-5">
        <div className="w-full h-full col-span-1 md:space-x-3 md:max-h-[75vh] flex flex-col md:flex-row ">
          <div className="flex flex-col md:flex-row gap-3">
            <FieldSelector addFormField={addFormField} />
            <Separator orientation={isDesktop ? 'vertical' : 'horizontal'} />
          </div>
          <div className="overflow-y-auto flex-1 my-2">
            <FormFieldList
              formFields={formFields}
              setFormFields={setFormFields}
              updateFormField={updateFormField}
              openEditDialog={openEditDialog}
            />
          </div>
        </div>
        <div className="w-full h-full col-span-1">
          <FormPreview formFields={formFields} />
        </div>
      </div>
      <EditFieldDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        field={selectedField}
        onSave={handleSaveField}
      />
    </section>
  )
}
