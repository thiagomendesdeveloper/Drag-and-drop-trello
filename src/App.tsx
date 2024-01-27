import { Router } from './routes/routes'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Router />
      </DndProvider>
    </Provider>
  )
}

export default App
