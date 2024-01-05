import SelectDropdown from '@components/elements/select';

const Index = () => {
  const GenderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ];

  return (
    <div>
      <h3 className="text-primary">Index</h3>

      <div style={{ padding: '40px', margin: '56px' }}>
        <SelectDropdown
          options={GenderOptions}
          label={'Select an Item'}
          placeholder="Select Next of Kin State of Origin"
          name="kinStateOfOrigin"
        />
      </div>
    </div>
  );
};

export default Index;
