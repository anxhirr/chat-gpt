'use client'
import useSwr from 'swr'
import Select from 'react-select'

const fetchModels = () => fetch('/api/getModels').then((res) => res.json())

const ModelSelection = () => {
  const { data: models, isLoading, error } = useSwr('models', fetchModels)

  const { data: model, mutate: setModel } = useSwr('model', {
    fallbackData: 'text-davinci-003',
  })

  return (
    <div>
      <Select
        className='mt-2'
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
          control: () => 'bg-[#434654] border-[#434654]',
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  )
}
export default ModelSelection
