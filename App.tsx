 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   View,
 } from 'react-native';
import { LoginPage } from './src/pages/login';

 const App = () => {
   return (
     <SafeAreaView>
       <ScrollView
         contentInsetAdjustmentBehavior="automatic">
         <View>
            <LoginPage />
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };

 export default App;
