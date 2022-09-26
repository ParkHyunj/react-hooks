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