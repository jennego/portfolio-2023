import React, { useEffect, useState } from "react"
import HyperModal from "react-hyper-modal"

const PortfolioItem = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setModalVisible(true)
  }, [])

  const onModalClose = () => {
    setModalVisible(false)
  }

  return <HyperModal isOpen={modalVisible}>Hello!</HyperModal>
}

// Page Query removed from simplicity

export default PortfolioItem
