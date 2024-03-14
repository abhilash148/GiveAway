/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TextInput, Button} from 'react-native';
import { FlatList, StyleSheet } from 'react-native';


const name = "Abhilash";
const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string
  ) => {
    return firstName + ' ' + secondName + ' ' + thirdName;
  }

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {

  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!</Text>
      <Button onPress={ () => {
        setIsHungry(false);
      }}
      disabled={!isHungry}
      title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );

};

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat name='Abhilash'/>
      <Cat name='Santosh'/>
      <Cat name='Yashwanth'/>
    </View>
  );
};

const PizzaTranslator = () => {
  const [text, setText] = useState('');

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder='Type here to translate!'
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && 'pizza')
          .join(' ')}
      </Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
}
);

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Abhilash'},
          {key: 'Santosh'},
          {key: 'Yashwanth'},
          {key: 'Praveen'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />

    </View>
  );
};


export default FlatListBasics;
