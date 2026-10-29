import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const nomeCorso = "Sviluppo App con React Native";
const anno= 2026;

const os = Platform.OS === 'ios' ? 'iOS' : Platform.OS === 'android' ? 'Android' : 'Web';

const argomenti = [
  {id: 1, titolo: 'JavaScript moderno', completato: true},
  {id: 2, titolo: 'Componenti e stato', completato: false},
  {id: 3, titolo: 'Layout con flexbox', completato: false},
  {id: 4, titolo: 'Navigazione tra schermate', completato: false}
]

export default function HomeScreen(){ // Funzione principale da visualizzare
  return (
    // <></> --> fragment (frammento), lo usiamo per restituire tutto come unico tag (in questo caso no perchè abbiamo SafeAreaView che fa convenientemente anche quello)
    // SafeAreaView --> Per l'isoletta in alto del cazzo di iPhone, possiamo far si che il sito non sparisca dietro (deprecated, sostituito da safe-area-context)
    // ScrollView --> Se lo schermo è troppo piccolo posso comunque vedere il sito web scrollando verso il basso (se è abbastanza grande non ho lo scroll)
    <SafeAreaView>
      <ScrollView> 
        <Text style={styles.titolo}>Hello World</Text>
        <Text style={styles.sottotitolo}>{nomeCorso} - {anno}</Text>
        <View style={styles.riquadro}>
          <Text style={styles.testo}>App in esecuzione su: {os}</Text>
        </View>

        <Text style={styles.statuscorsi}>Programma del corso:</Text>

        {argomenti.map((argomento) => (
          <Text key={argomento.id} style={styles.statuscorsi}>
            {argomento.titolo}{' '}
            <Text style={argomento.completato ? styles.completato : styles.nonCompletato}>
              {argomento.completato ? '[Completato]' : '[Non Completato]'}
            </Text>
          </Text>
        ))}
        
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
  },
  testo:{
    fontSize: 16,
    color: '#222222',
  },
  riquadro:{
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    gap: 4,
    marginVertical: 12, 
    borderColor: '#222222',
    borderWidth: 1,
  },
  completato: {
    color: '#157d1c',
    fontWeight: 'bold',
  },
  nonCompletato: {
    color: '#cc1919',
    fontWeight: 'bold',
  },
  statuscorsi:{
    fontSize: 16,
    color: '#222222',
    marginLeft: 10,
  },
});