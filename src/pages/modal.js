import React, { useEffect, useState } from "react"

const PortfolioItem = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setModalVisible(true)
  }, [])

  const onModalClose = () => {
    setModalVisible(false)
  }

  return (
    <>
      Hi I should be a modal!
      {/* <CardModal
        show={modalVisible}
        onClose={onModalClose}
        onFlipFinish={onFlipFinish}
        cardFront={CardFrontComponent}
        cardBack={CardBackComponent}
        style={initialModalStyle}
      /> */}
    </>
  )
}

// Page Query removed from simplicity

export default PortfolioItem
