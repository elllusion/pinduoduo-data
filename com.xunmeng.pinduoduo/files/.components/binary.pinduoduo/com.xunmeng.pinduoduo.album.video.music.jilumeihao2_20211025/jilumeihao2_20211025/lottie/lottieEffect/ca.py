#coding=utf-8

import os
import json

#目标文件夹

addressPDF = u'./data.json'

def get_valve_from_dic(m_dic):
    if 'i' in m_dic:
        print(m_dic)
        if 'x' in m_dic['i']:
            del m_dic['i']
    if 'o' in m_dic:
        if 'x' in m_dic['o']:
            del m_dic['o']
    if 'to' in m_dic:
        del m_dic['to']
    if 'ti' in m_dic:
        del m_dic['ti']
    for value in m_dic:
        if isinstance(m_dic[value],list):
            m_dic[value] = get_valve_from_list(m_dic[value])
        elif isinstance(m_dic[value],dict):
            m_dic[value] = get_valve_from_dic(m_dic[value])
    return m_dic
            
def get_valve_from_list(m_dic):
    new_dic = []
    for value in m_dic:
        if isinstance(value,list):
            new_dic.append(get_valve_from_list(value))
        elif isinstance(value,dict):
            new_dic.append(get_valve_from_dic(value))
        else:
            new_dic.append(value)
    return new_dic
    
def get_valve(m_dic):
    for value in m_dic:
        if isinstance(m_dic[value],list):
            print(value)
            m_dic[value] = get_valve_from_list(m_dic[value])
        elif isinstance(m_dic[value],dict):
            print(value)
            m_dic[value] = get_valve_from_dic(m_dic[value])
    return m_dic
    

if __name__ == '__main__':
    file = open(addressPDF,encoding='utf8',errors='ignore');
    file_lines = file.read() #以字符串形式读取json
    file.close()
    file_json = json.loads(file_lines)
    file_json = get_valve(file_json)
    with open(addressPDF,'w',encoding='utf8') as f:
        json.dump(file_json, f, indent=4)
