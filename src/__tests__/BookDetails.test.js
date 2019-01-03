import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter as Router } from 'react-router-dom'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import { BookDetails } from '../containers/BookDetails'

describe('A BookDetails component (test w/ Enzyme)', () => {
  it('fetches a book on mount', () => {
    const fetchBook = jasmine.createSpy('fetchBook')
    const wrapper = shallow(
      <BookDetails match={{ params: { isbn: 1 } }} fetchBook={fetchBook} />,
    )
    const component = wrapper.instance()

    component.componentDidMount()

    expect(fetchBook).toHaveBeenCalledWith(1)
  })

  it('fetches a book on mount (tested with mount)', () => {
    const fetchBook = jasmine.createSpy('fetchBook')
    mount(
      <Router>
        <BookDetails match={{ params: { isbn: 1 } }} fetchBook={fetchBook} />
      </Router>,
    )

    expect(fetchBook).toHaveBeenCalledWith(1)
  })
})

describe('A BookDetails component (test w/ Jest)', () => {
  it('Fetches a book on call componentDidMount (shallow)', () => {
    const isbn = 4711
    const fetchBook = jest.fn()

    const renderer = new ShallowRenderer()
    renderer.render(
      <BookDetails match={{ params: { isbn } }} fetchBook={fetchBook} />,
    )
    const bookDetailsInstance = renderer.getMountedInstance()

    expect(fetchBook).toHaveBeenCalledTimes(0)

    bookDetailsInstance.componentDidMount()

    expect(fetchBook).toHaveBeenCalledTimes(1)
    expect(fetchBook).toHaveBeenCalledWith(isbn)
  })

  it('Fetches a book on mount', () => {
    const isbn = 4711
    const fetchBook = jest.fn()
    expect(fetchBook).toHaveBeenCalledTimes(0)

    const testRenderer = TestRenderer.create(
      <BookDetails match={{ params: { isbn } }} fetchBook={fetchBook} />,
    )
    testRenderer.getInstance()

    expect(fetchBook).toHaveBeenCalledTimes(1)
    expect(fetchBook).toHaveBeenCalledWith(isbn)

    testRenderer.unmount()
  })
})
