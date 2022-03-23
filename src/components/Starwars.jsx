import PeopleList from './PeopleList'
import Pagination from './Pagination'
import Spinner from './Spinner'

import usePeople from '../hooks/usePeople'

function Starwars() {

  const { people, isLoading, isError, onBack, onNext } = usePeople()

  if (isLoading) return <Spinner />
  if (isError) return 'Ошибка получения списока героев'

  return (
    <>
      <PeopleList data={ people.results } />
      <Pagination onBack={ onBack } onNext={ onNext } />
    </>
  )
}



export default Starwars
