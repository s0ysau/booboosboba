const BASE_URL = `${process.env.BACK_END_URL}/api/order`

const createOrder = async (initialOrder) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(initialOrder)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  createOrder
}
