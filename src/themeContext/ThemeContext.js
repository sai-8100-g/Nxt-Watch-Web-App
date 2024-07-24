import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  isPopup: false,
  isHome: true,
  isTrending: false,
  isGaming: false,
  isSavedVideos: false,
  savedVideos: [],
  onToggleTheme: () => {},
  onAddSavedList: () => {},
  onRemoveSavedList: () => {},
  onClickToHomeSection: () => {},
  onClickToTrendingSection: () => {},
  onClickToGamingSection: () => {},
  onClickToSavedSection: () => {},
})

export default ThemeContext
