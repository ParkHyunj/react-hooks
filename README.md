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

# 2.5 useFadeIn
1> 하나의 이벤트를 자동으로 서서히 나타나게 만드는 hook                       
2> 애니매이션을 hook에 포함시키는 방법                   

# 2.5 useNetwor k
1> navigator가 online 또는 offline이 되는걸 막아주는 것.                 
2> network 상태가 바뀔 때마다 function을 부르는 hook                  

# 2.6 useScroll
1> 유저가 스크롤 해서 무언가를 지나쳤을 때, 색상을 바꾸거나 무엇이든지 할 필요가 있을 때 사용하는 hook                  
2> style={{ height: "1000vh"}} => 스크롤을 하게끔 화면 구성               
3> console.log({"y", window.scrollY, "x", window.scrollX});                  

# 2.6 useFullscreen
1> 버튼을 눌렀을 때, 해당 이미지를 전체 화면으로 전환시키는 hook                

# 2.7 useNotification
1> 알람이 실행되는 function                   
2> default => 모든 알람이 허용되지 않는다. => 사용자의 선택을 알 수 없어서 browser는 value가 denied 된 것처럼 행동한다.              
3> 버튼을 누르면, chrome 알림이 뜬다.               

# 2.8 useAxios
1> axios               
    => http request를 만드는 것(npm을 이용하여 다운로드 가능한)               
    => default url을 설정하거나 자동으로 헤더를 설정하는 것을 허용              
2> console 창에 new Date(), Date.now{}를 하면 임의의 숫자 생성                        
3> Refetch button을 누르면, setTrigger가 발동되고, trigger가 업데이트 되서 useEffect의 dependency인 trigger로 인해 useEffect가 다시 실행된다.                      
4> &&를 쓸 때, a && b에서 true 값이 있으면 결과적으로 항상 두 번째 값인 b를 얻는다.                 

# 2.10
1> 자신의 패키지를 publish하기                     
2> npm init -> package name: (react-hooks) 다음에 @nooks/use-title라고 쓰기               
3> 이후로 쓸거 쓰고, enter로 넘어가다가 license (ISC)에서 MIT라 쓰기                        
4> package.json에서 "main": "index.js"는 다른 사람들이 설치해야 하기 때문에 꼭 있어야 한다.                   
5> dependencies => peerDependencies로 바꾸기 : 요구되지만, 설치할 필요가 없다는 뜻                         
6> npmjs.com에 들어가서 프로필에서 add organization 누르기               
7> name에 마음대로 쓰고, create 버튼 누르기                 
8> 터미널에 npm login 치기                  
9> npmjs.com에서는 username : hyunjinpark으로 치기                   
10> password는 쳐도 눈으로는 안보이므로 주의해서 치기                 
11> package.json에서 "private": true 지우고, npm publish --access public실행               
12> https://www.npmjs.com/package/@developer567/use-title                   

# 배포
1> npm install --save gh-pages                    
2> package.json에서 "homepage": "https://ParkHyunj.github.io/reat-hooks" 추가                
3> "scripts" 하위에                 
    "deploy": "gh-pages -d build",              
    "predeploy": "npm run build"               
4> npm run build               
5> npm run deploy                 
6> 터미널에 Published가 뜨면 성공.                    