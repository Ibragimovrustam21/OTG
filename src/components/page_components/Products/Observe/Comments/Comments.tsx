import { useState } from 'react'
import { Button, Col, Row, Input } from 'antd'

import CommentsBox from './CommentsBox'
import './comments.scss'
import { useMutation, useQuery } from 'react-query'
import { createComments, getComments } from '../../../../../api/Comments'
import { ITextArea } from '../../../../../interface'

const Comments = () => {
  const [comment, setComment] = useState<ITextArea>({ text: '' })

  const { data: response, isLoading, isSuccess, isError, refetch } = useQuery(
    'get-comments',
    getComments
  )

  const { mutateAsync } = useMutation((text: ITextArea) => createComments(text), {
    onSuccess() {
      refetch()
    }
  })

  const onSubmit = async () => {
    mutateAsync(comment)
    setComment({ text: '' })
  }

  return (
    <div className='comments__wrapper'>
      {
        isLoading && <p>Loading...</p>
      }
      {
        isError && <p>Error</p>
      }
      {
        isSuccess && response.data.length !== 0 && response.data.map((item: ITextArea) => {
          return (
            <CommentsBox text={item.text} key={item.text} />
          )
        })
      }

      <Row className='comments__input--block'>
        <Col xs={24} sm={24} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }} xl={{ span: 12, offset: 6 }} className='ss'>
          <Input.TextArea className='comments__textArea' rows={5} value={comment.text} onChange={(e) => setComment({ text: e.target.value })} placeholder='Write your comment here... ' />
          <div className='comments__btn--block'>
            <Button size='large' className='comments__btn' onClick={onSubmit} style={{ marginTop: '10px' }} type='primary'>Submit</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Comments