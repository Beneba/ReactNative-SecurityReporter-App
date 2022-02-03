import {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,Picker, Image } from 'react-native';

    export default function OptionPicker (){
        const [selectedValue, setSelectedValue] = useState("");
            return (
                <View style={styles.container}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 250, borderBottomWidth:2, borderBottomColor: 'blue',  fontSize:16, fontWeight: "bold", }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select Category of Incident" value="Select" />
                    <Picker.Item label="Accident" value="Accident" />
                    <Picker.Item label="Suicide" value="Suicide" />
                    <Picker.Item label="Robbery" value="Robbery" />


                </Picker>
             </View>
     );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }
    });