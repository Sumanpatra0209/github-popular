// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isActive, LanguageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = LanguageFilterDetails
  const btnClassName = isActive
    ? 'languageButton activeLanguageButton'
    : 'languageButton'

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        onClick={onClickLanguageFilter}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
