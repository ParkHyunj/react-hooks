# hook
1> react의 state machine에 연결하는 기본적인 방법
2> 함수형 프로그램을 권장한다.
3> hook이 생기기 전에 state를 함수형 component에 사용할 수 없었다. 

# 1.0 useState
1>  const [ item, setItem ] = useState()
    => ()안에는 state의 초기값 설정 가능
2> useState는 Array를 return한다.

# 1.1 useInput(part 1)
1> useinput은 기본적으로 input을 업데이트한다.
2> <input placeholder="Name" /> => 박스 안에 Name으로 생성
3> value={name.value} onChange={name.onChange} => {...name}으로 나타낼 수 있다.
4> 독립된 함수 한 개를 만들어서 useState로 매개체 역할

# 1.3 useTabs
1> section 1, 2를 눌렀을 때 각각의 내용이 나오게끔 구현
2> !는 '아니다', ||는 '또는' 
3> initialTab은 usetTabs -> useState -> currentIndex
4> setcurrentIndex -> changeItem
5> allTabs는 currentItem으로

# 2.0 useEffect
1> useEffect는 2개의 인자를 받는데, 첫 번째는 function으로써의 결과, 두 번째는 dependency
1> useEffect()는 componentDidMount(), componentDidUpdate(), componentWillUnmount() 의 역할을 한다.
2> useEffect()의 1번째 인자는 function으로서의 effct ==> componentDidMount()와 기능이 비슷함)
3> useEffect()의 2번쨰 인자는 deps(dependency)으로써, useEffect()가 deps리스트에 있는 값이 변할 때만 실행되게 함 ==> componentDidUpdate()와 기능이 비슷함

# 2.1 useTitle
1> 문서의 제목을 업데이트 시켜주는 hook
2> setTimeout(() => titleUpdater("Home"), 5000);
    => 5초 후에 loading에서 Home으로 제목이 바뀐다.
3> titleUpdater에는 setTitle()이라는 함수가 담겨있다.

# 2.2 useClick
1> const input = useRef();
    => reference는 component의 어떤 부분을 선택할 수 있는 방법
    => document.getElementByID()를 사용한 것과 동일
2> setTimeout(() => console.log(potato.current), 5000)
3> function App() {
    const potato = useRef();
    setTimeout(() => potato.current.focus(), 5000);
    return (
        <div className="App">
            <div>Hi</div>
            <input ref={potato} placeholder="la" />
        </div> );}
   export default App;
4> Uncaught TypeError: Cannot read properties of undefined (reading 'focus') at App.js:5:1
    => 개발자 도구에서 console 창 누르면 이런 오류 생김 
    => 오류 발생 이유: mount가 너무 빨리되서 potato.current가 극 초반에 존재하지 않아서 / console.log 해보면 초반에 undefined가 뜨다가 제대로 잡힌다.
5> 글씨를 눌렀을 때, say hello가 나오게 구현.

# 2.3 useConfirm 
1> 이 두개는 useEffect와 useState를 사용하지 않기 때문에, hook은 아니다.
2> useConfirm은 사용자가 무언가를 하기전에 확인하는 건데, 예를 들어, 사용자가 버튼을 클릭하는 작업을 하면 이벤트를 실행하기 전에 메세지를 보여주고 싶을 때 사용(정말 그렇게 하고 싶니? 등등)
3>  src\App.js
    Line 9:8:  Unexpected use of 'confirm'  no-restricted-globals
    Search for the keywords to learn more about each error.
    => confirm(message)-> window.confirm(message)으로 변경하면 됨.

# 2.3 usePreventLeave
1> 보통 웹사이트에서 window 창을 닫을 때, "아직 저장하지 않았다"라고 창이 뜨게끔 구현.
2> beforeunload는 window가 닫히기 전에 function이 실행되는걸 허락한다.

# 2.4 useBeforeLeave
1> 탭을 닫을때 실행되는 function
2> useEffect에 dependency에 빈 배열 [] 을 넣으면 mount되고 나서 한 번만 실행이 됩니다.
3> 마우스가 화면에서 벗어나면 생기는 이벤트 구현
