import React, { useState } from 'react';
import {Text, StyleSheet, View, TextInput, Button, TouchableOpacity} from 'react-native';

const FormScreen = ({navigation}) => {
const [formData, setFormData] = useState({
    giant: "",
    dwarf: "",
});



function handleSubmit() {
    
    alert('Your form has been sent with the values of: ' + formData.giant + ' and ' + formData.dwarf);
  }
  
  return (
    <View style={styles.container}>
     

      <Button 
            title="Naaah.... I'm gonna go back to the useless List instead"
            onPress={() => navigation.navigate('List')
            }/>
            
        <Text>Giant</Text>
        <TextInput 
          placeholder="How short is the tallest Giant?" 
          value={formData.giant}
          onChangeText={value => setFormData({ ...formData, giant: value})}
        />

          <Text>Dwarf</Text>
        <TextInput
          placeholder="How tall is the biggest Dwarf?"
          value={formData.dwarf}
          onChangeText={value => setFormData({ ...formData, dwarf: value})}
        />
        
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSubmit}
  >
    <Text style={styles.saveButtonText}>Send my answer!</Text>
  </TouchableOpacity>


       


    </View>

    
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
      },
      itemStyle: {
        padding: 15,
      },
      textInputStyles: {
        height: 40,
        borderWidth:1,
        paddingLeft:20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white'
      },
      TextInput: {
          padding: 15,
          margin: 5,
          borderColor: 'black',
      },
      saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
      },
      saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
      }
  
});

export default FormScreen;
