import React, { useEffect, useState } from 'react'
import HeroLogo from '../public/HeroLogo'
import Footer from '../components/Footer'
import Help from '../components/Help'
import Logo from '../public/Logo'
import { getQuestions } from '../redux/actions/questionActions'
import { connect } from 'react-redux'

const mapStateToProps = ({
  question: { fetching: fetchingQuestions, list: questionsList }
}) => {
  return {
    fetchingQuestions,
    questionsList
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGetQuestions: () => {
    dispatch(getQuestions())
  }
})

const Home = ({ dispatchGetQuestions, fetchingQuestions, questionsList }) => {
  const [startQuiz, setStartQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    dispatchGetQuestions()
  }, [])

  const renderQuestionMenuItem = (questionNumber) => {
    return <>Question {questionNumber} { answers.find(e => e.question === questionNumber) ? '✓' : ''}</>
  }

  const handleClickQuestionMenuItem = (questionNumber) => {
    if (answers.find(e => e.question === questionNumber) || answers.find(e => e.question === questionNumber - 1)) {
      setCurrentQuestion(questionNumber)
      setShowResult(false)
    }
  }

  const handleClickResultMenuItem = () => {
    if (answers.length === questionsList.length) {
      setShowResult(true)
    }
  }

  const handleSelectAnswer = (questionNumber, answer, isRejection) => {
    const tempAnswers = [...answers]
    if (tempAnswers && tempAnswers.length > 0 && tempAnswers.find(e => e.question === questionNumber)) {
      tempAnswers.map(e => {
        if (e.question === questionNumber) {
          e.answer = answer
          e.isRejection = isRejection
        }
        return e
      })
    } else {
      tempAnswers.push({ question: questionNumber, answer: answer, isRejection: isRejection })
    }
    setAnswers(tempAnswers)
    if (tempAnswers.length === questionsList.length) {
      setShowResult(true)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const resetQuiz = () => {
    setAnswers([])
    setCurrentQuestion(1)
    setShowResult(false)
  }

  return (
    <div>
      {!startQuiz &&
        <>
          <div className='hero'>
            <HeroLogo className='logo' />
            <h1 className='title'>Be good <br />to yourself</h1>
            <div className='intro'>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</div>
            <span className='btn' onClick={() => setStartQuiz(true)}>Take the quiz</span>
          </div>
          <Help />
          <Footer />
        </>
      }
      {startQuiz &&
        <div className='quiz-section'>
          <div className='header'>
            <Logo />
            {questionsList && questionsList.length > 0 &&
              <ul>
                {questionsList.map((item, key) => {
                  return <li
                    key={key}
                    className={
                      (currentQuestion === key + 1 && !showResult) ? 'active' : ((!answers.find(e => e.question === key + 1) && !answers.find(e => e.question === key)) ? 'disabled' : '')
                    }
                    onClick={() => handleClickQuestionMenuItem(key + 1)}
                  >{renderQuestionMenuItem(key + 1)}</li>
                })}
                <li
                  onClick={handleClickResultMenuItem}
                  className={answers.length !== questionsList.length ? 'disabled' : (showResult ? 'active' : '')}
                >Result</li>
              </ul>
            }
          </div>
            <div className='questions'>
              {fetchingQuestions && <>Fetching questions ... </> }
              {questionsList[currentQuestion - 1] && currentQuestion > 0 && currentQuestion - 1 < questionsList.length && !showResult &&
                <>
                  <div className='question-text'>{questionsList[currentQuestion - 1].question}</div>
                  <div className='question-options'>
                    {questionsList[currentQuestion - 1].options.map((option, optionKey) => {
                      return (
                        <div key={optionKey} className='question-option'>
                          <input
                            type='radio'
                            checked={answers.find(e => e.question === currentQuestion)?.answer === option.value}
                            id={'question-' + option.value.toString()}
                            value={option.value.toString()}
                            name={'question-' + currentQuestion}
                            onChange={() => handleSelectAnswer(currentQuestion, option.value, option.isRejection)}
                          />
                          <label htmlFor={'question-' + option.value.toString()}><span dangerouslySetInnerHTML={{ __html: option.display }}></span></label>
                        </div>
                      )
                    })}
                  </div>
                </>
              }
              {showResult && answers && answers.length === questionsList.length &&
                <>
                  {answers.filter(e => e.isRejection === true).length > 0 ? (
                    <>
                      “Unfortunately, we are unable to prescribe this medication for you. This
                      is because finasteride can alter the PSA levels, which maybe used to monitor for cancer.
                      You should discuss this further with your GP or specialist if you would still like this
                      medication.”
                    </>
                  ) : (
                    <>
                      “Great news! We have the perfect treatment for your
                      hair loss. Proceed to <a href='https://www.manual.co' target="_blank" rel="noreferrer">www.manual.co</a>, and prepare to say hello to your new hair!”
                    </>
                  )}
                  <div
                    className='redo-btn'
                    onClick={resetQuiz}
                  > Redo the quiz </div>
                </>
              }
            </div>
        </div>
      }

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
