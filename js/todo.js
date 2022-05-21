const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//localStorage에 리스트 저장
let toDos = [];

function saveToDos() {                                      //새로 고침하면 다 날아가는 거 막아주는 함수
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStorage에 내가 입력한 값 저장
}                                                           //JSON이용해서 객체 배열을 string화해줌! 그래야 계속 새 값 저장됨!


//삭제 버튼
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove(); //삭제 기능
    toDos = toDos.filter(toDos => toDos.id !== parseInt(li.id));
    saveToDos();
}

//리스트 추가
function paintToDo(arg) {                              //리스트 아이템 화면에 보여주는 함수. 인자는 내가 저장한 input값
    const li = document.createElement('li');           //<li> 생성
    li.id = arg.id;                                    
    const span = document.createElement('span');       //<span> 생성
    span.innerText = arg.text;                         //<span> 안에 텍스트 
    const button = document.createElement('button');   //<button> 생성
    button.innerText = '❌';                          //<button> 안에 X 표시 들어감    
    button.addEventListener('click', deleteToDo);     //버튼 클릭하면 li 삭제되는 클릭 이벤트
    li.appendChild(span);                             //<li><span></span></li>
    li.appendChild(button);                           //<li><span></span><button></button></li>
    toDoList.appendChild(li);                         //toDoList에 <li> 추가
    console.log(li);
    console.log(typeof li);
}

//리스트 감지
function handleToDoSubmit(event) {
    event.preventDefault();          //새로고침되면 사라지는 거 방지
    const newToDo = toDoInput.value; //인풋에 적어둔 값 저장!
    toDoInput.value = '';            //인풋에 초기화(값 저장해뒀으니 ㄱㅊ)
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);           //내가 인풋에 저장한 값들 화면에 추가되는 함수
    saveToDos();                     //추가된 인풋들 삭제안되게 브라우저에 저장해줌
};

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY); //localStorage에 저장된 리스트(string)

//localStorage에 저장된 리스트 불러오기
if(savedToDos) { //(savedToDos !== null)        //localStorage에 key에 값이 있다면 ~해라
    const parsedToDos = JSON.parse(savedToDos); //localStorage에 저장된 리스트 타입은 string에서 배열로 변환
    toDos = parsedToDos;
    parsedToDos.forEach(item => paintToDo(item)); //Arrow function
} 