#!/usr/bin/env python3
import re
import os

docs_directory = './docs'
block_patch = './views/layouts'



blocks = ['footer','header']





def replace(html_file, block_file, block):
    print(html_file, block_file, block)
    with open(block_file, 'r') as f1, open(html_file, 'r') as f2:
        text = f1.read()
        text2 = f2.read()
        ntext = re.sub(r'(<!-- '+block+' start -->\n)(.*)(<!-- '+block+' end -->)',r'\1' + text + '\n'+r'\3',text2, flags=re.M|re.DOTALL)

        with open(html_file, 'w') as fout:
            fout.write(ntext)

# replace('./docs/test.html', block_patch+'/footer.html', 'footer')
files_in_docs = os.listdir(docs_directory)
html_files = filter(lambda x: x.endswith('.html'), files_in_docs)
for html_file in html_files:
    # print(html_file)
    for block in blocks:
        # print(block)
        replace(docs_directory+'/'+html_file, block_patch + '/'+block+'.html', block)

