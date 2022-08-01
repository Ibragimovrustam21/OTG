import { Select } from "antd";
// import { useTranslation } from "react-i18next";

const Lang = () => {
  // const { i18n } = useTranslation();

  return (
    <Select
      size="small"
      defaultValue={'eng'}
      // defaultValue={i18n.language}
      // onChange={(val) => i18n.changeLanguage(val)}
    >
      <Select.Option value="uz">UZ</Select.Option>
      <Select.Option value="ru">RU</Select.Option>
      <Select.Option value="eng">ENG</Select.Option>
    </Select>
  );
};

export default Lang;
