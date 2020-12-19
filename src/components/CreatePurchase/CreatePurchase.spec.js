import { render } from "@testing-library/react"
import CreatePurchase from "."

describe('CreatePurchase component', () => {
    it('Should render', () => {
        render(<CreatePurchase />)
    })
})