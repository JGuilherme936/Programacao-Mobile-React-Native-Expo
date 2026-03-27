import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  Container: { padding: 10 },
  Buttons: { flexDirection: "row", width: '100%', marginBottom: 10, justifyContent: 'space-between' },
  Button: { width: '30%', backgroundColor: '#257cc0', padding: 12, borderRadius: 5 },
  CleanButton: { width: '100%', backgroundColor: '#257cc0', padding: 12, marginBottom: 10, borderRadius: 5 },
  TextButton: { color: '#fff', textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }
});
export default styles;
