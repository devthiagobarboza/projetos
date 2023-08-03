import PySimpleGUI as sg
import pandas as pd

def main():
    #definindo o tema
    sg.theme("Purple")

    #endereçando o arquivo para leitura
    EXCEL_FILE = '*.xlsx'
    df = pd.read_excel(EXCEL_FILE)

    #definindo layout
    layout = [
        [sg.Text("Pacientes Ativos: ")],
        [sg.Text('Nome', size=(9,1)), sg.InputText(key='Nome', size=(20))],
        [sg.Text('Quantidade', size=(9,1)), sg.Spin([i for i in range(0,16)],
                                                      initial_value=1, key='Quantidade')]],\
        [sg.Input(key='Data', size=(10,1)), sg.CalendarButton('Data',title='Escolha uma data', format='%d-%m-%Y', close_when_date_chosen=True, target='Data', location=(500,200), no_titlebar=False)],\
        [sg.Text('Hora', size=(9,1)), sg.InputText(key='Hora', size=(20))],\
        [sg.Text('Mês', size=(9,1)), sg.InputText(key='Mês', size=(20))],\
        [sg.Text('Realizada', size=(9,1)),
         sg.Combo(['Sim', 'Não'], default_value='Sim', key='Realizada')],\
        [sg.Text('Motivo', size=(9,1)), sg.InputText(key='Motivo', size=(20))],\
        [sg.Text('Observação', size=(9,1)),
         sg.Combo(['Cobrar normalmente', 'Não cobrar'], default_value='Cobrar normalmente', key='Observação', size=(20))],\
        [sg.Submit(button_text="Confirmar"), sg.Button('Limpar'), sg.Exit(button_text='Sair')]

    window = sg.Window("-- Atendimentos --", layout)

    def clear_input():
        for key in values:
            window[key]('')
        return None

    while True:
        event, values = window.read()
        if event == sg.WIN_CLOSED or event == "Sair":
            break
        if event == 'Limpar':
            clear_input()

        if event =="Confirmar":
            new_record = pd.DataFrame(values, index=[0])
            df = pd.concat([df, new_record], ignore_index=True)
            df.to_excel(EXCEL_FILE, index=False)
            sg.popup('Informações cadastradas com sucesso!')
            clear_input()

    window.close()

if __name__ == '__main__':
    main()