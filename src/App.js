import logo from './logo.svg';
import Test from './components/test';
import SideBar from './components/sidebar';
import './App.css';
import  { DrugTimerContainer, InfoPanelContainer, ShockTimerContainer } from './components/functional/Containers';

function App() {
  return (
    <div class="flex flex-col h-[1080px] w-[1920px]">
      <div class="flex-1 flex flex-row bg-standardbg bg-cover bg-center bg-no-repeat">
        <div class='flex-0'>
          <SideBar></SideBar>
        </div>
        <div class="flex-1 flex flex-col justify-evenly ">
          <div class='flex-1 border-8 border-red-600 m-8'>
          placeholder for timing log
          </div>

          <div class="flex-0 flex flex-row justify-between my-10 mx-8">
            <div >
              <DrugTimerContainer></DrugTimerContainer>
            </div>
            <div>
            <ShockTimerContainer></ShockTimerContainer>
            </div>
            <div>
            <InfoPanelContainer></InfoPanelContainer>
            </div>
          </div>
        </div>

        <div class='flex-0 border-8 border-red-600 m-8 w-[412px]'>
          placeholder for event
        </div>
      </div>
    </div>

  );
}

export default App;
