import {Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

const nomeCorso = "Sviluppo App con React Native";
const anno= 2026;

export default function HomeScreen(){ // Funzione principale da visualizzare
  return (
    // <></> --> fragment (frammento), lo usiamo per restituire tutto come unico tag (in questo caso no perchè abbiamo SafeAreaView che fa convenientemente anche quello)
    // SafeAreaView --> Per l'isoletta in alto del cazzo di iPhone, possiamo far si che il sito non sparisca dietro (deprecated, sostituito da safe-area-context)
    // ScrollView --> Se lo schermo è troppo piccolo posso comunque vedere il sito web scrollando verso il basso (se è abbastanza grande non ho lo scroll)
    <SafeAreaView>
      <ScrollView> 
        <Text style={styles.titolo}>Hello World</Text>
        <Text style={styles.sottotitolo}>{nomeCorso} - {anno}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titolo:{ // creo la classe titolo
    fontSize: 36,
    fontWeight: 'bold',
    color: '#208AEF',
    textAlign: 'center',
    marginTop: 24,
  },
  sottotitolo:{
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
  }
});