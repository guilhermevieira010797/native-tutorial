import React from 'react';
import { Button, Text, View } from 'react-native';
import { LoginStyles } from './styles';

export const LoginPage: React.FC = () => {
    const [count, setCount] = React.useState<number>(0);
    
    return (
        <View style={LoginStyles.Container}>
            <Text style={LoginStyles.Text}>
                Teste
            </Text>
            <Button onPress={() => setCount(count + 1)} title="Clicar" />
            <Text>
                Count: {count}
            </Text>
        </View>
    )
}
