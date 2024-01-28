import { Header } from "../components/Header"
import Column from "../components/Column"
import './style.css'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { column } from "./types"

export default function Home() {

    const list = useSelector((state: RootState) => state.ticket)
    console.log(list)
    return (
        <>
            <Header />
            <div className="container">
                <div className="grid">
                    {list.tickets.map((item: column) => {
                        return (
                            <Column key={item.id} headerColor={item.color} title={item.title} cards={item.cards} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}