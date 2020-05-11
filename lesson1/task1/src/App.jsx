import React from 'react';
import ThemedButton from './ThemedButton';
import { themes , ThemContext } from './themes-context';

class App extends React.Component{
    state={
        theme:themes.dark,
    };
    toggleTheme=()=>{
        const newTheme= this.state.theme===themes.dark
        ? themes.light
        : themes.dark;
        this.setState({
            theme:newTheme
        })
    }
  render(){

return(
    <div>
    <ThemContext.Provider value={this.state.theme}>
    <ThemedButton onClick={this.toggleTheme}>
        Dynamic Theme
        </ThemedButton>
        </ThemContext.Provider>
    <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
    
  
    </div>
    
)
    

  }
    
}

export default App;