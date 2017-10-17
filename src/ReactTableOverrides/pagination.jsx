import React, { Component } from 'react'
import classnames from 'classnames'
import { Button, Dropdown, Form, Input } from 'semantic-ui-react'

const defaultButton = props => (
  <button type="button" {...props} className="-btn">
    {props.children}
  </button>
)

export default darkProfile =>
  class ReactTablePagination extends Component {
    constructor(props) {
      super()

      this.getSafePage = this.getSafePage.bind(this)
      this.changePage = this.changePage.bind(this)
      this.applyPage = this.applyPage.bind(this)

      this.state = {
        page: props.page
      }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ page: nextProps.page })
    }

    getSafePage(page) {
      if (isNaN(page)) {
        page = this.props.page
      }
      return Math.min(Math.max(page, 0), this.props.pages - 1)
    }

    changePage(page) {
      page = this.getSafePage(page)
      this.setState({ page })
      if (this.props.page !== page) {
        this.props.onPageChange(page)
      }
    }

    applyPage(e) {
      e && e.preventDefault()
      const page = this.state.page
      this.changePage(page === '' ? this.props.page : page)
    }

    render() {
      const {
        // Computed
        pages,
        // Props
        page,
        showPageSizeOptions,
        pageSizeOptions,
        pageSize,
        showPageJump,
        canPrevious,
        canNext,
        onPageSizeChange,
        className,
        PreviousComponent = defaultButton,
        NextComponent = defaultButton
      } = this.props

      return (
        <div
          className={classnames(className, '-pagination')}
          style={this.props.paginationStyle}
        >
          <div className="-previous">
            <Button
              inverted={darkProfile}
              fluid
              onClick={e => {
                if (!canPrevious) return
                this.changePage(page - 1)
              }}
              disabled={!canPrevious}
            >
              {this.props.previousText}
            </Button>
          </div>
          <div className="-center">
            <Form style={{ width: '100%' }} size="mini" inverted={darkProfile}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  width: '100%'
                }}
              >
                <span className="-pageInfo">
                  {this.props.pageText}{' '}
                  {showPageJump ? (
                    <div className="-pageJump">
                      <Input
                        transparent={darkProfile}
                        size="mini"
                        type="text"
                        onChange={(e, { value }) => {
                          if (e.which === 13 || e.keyCode === 13) {
                            return this.applyPage()
                          }
                          const val = value
                          const page = val - 1
                          if (val === '') {
                            return this.setState({ page: val })
                          }
                          this.setState({ page: this.getSafePage(page) })
                        }}
                        value={
                          this.state.page === '' ? '' : this.state.page + 1
                        }
                        onBlur={this.applyPage}
                      />
                    </div>
                  ) : (
                    <span className="-currentPage">{page + 1}</span>
                  )}{' '}
                  {this.props.ofText}{' '}
                  <span className="-totalPages">{pages || 1}</span>
                </span>
                {showPageSizeOptions && (
                  <Form.Field className="inverted">
                    <Dropdown
                      className={darkProfile && 'inverted'}
                      selection
                      options={pageSizeOptions.map((option, i) => {
                        return {
                          key: i,
                          value: option,
                          text: `${option} ${this.props.rowsText}`
                        }
                      })}
                      onChange={(e, { value }) => onPageSizeChange(value)}
                      value={pageSize}
                    />
                  </Form.Field>
                )}
              </div>
            </Form>
          </div>
          <div className="-next">
            <Button
              fluid
              inverted={darkProfile}
              onClick={e => {
                if (!canNext) return
                this.changePage(page + 1)
              }}
              disabled={!canNext}
            >
              {this.props.nextText}
            </Button>
          </div>
        </div>
      )
    }
  }
