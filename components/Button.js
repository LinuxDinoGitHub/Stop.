import {React} from "react";
import { TouchableOpacity, View, StyleSheet , Text, KeyboardAvoidingView} from "react-native";

//Props: onClick event, content of button

const Button = (props) => {
    return (
        
            <TouchableOpacity style={[styles.shape, props.style]} onPress={props.onClick}>
                <View style={styles.iconContainer}>
                    <Text style={styles.text}>{props.content}</Text>
                </View>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    shape: {
        borderRadius: 3,
        height: 40,
        width: 110,
        backgroundColor: "grey"
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'sans-serif-thin',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Button;