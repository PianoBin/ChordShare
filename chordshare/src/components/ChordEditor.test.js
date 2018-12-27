import React from 'react';
import { shallow } from 'enzyme';
import ChordEditor from './ChordEditor';
import "../setupTests"

describe('<ChordEditor />', () => {
    it('renders an editor area', () => {
        const editor = shallow(<ChordEditor />);
        expect(editor.find('textarea').length).toEqual(1);
    });

    it('renders an output area', () => {
        const editor = shallow(<ChordEditor />);
        expect(editor.find('div.chord-output').length).toEqual(1);
    });

    it('renders the chord chart output', () => {
        const editor = shallow(<ChordEditor />);
        const expectedOutput = 
            '<div style="width:100%;height:100%;font-family:monospace" class="chord-output">' +
            '<div class="chord-sheet">' + 
            '<table class="row">' + 
            '<tr>' + 
            '<td class="chord"></td>' + 
            '</tr>' +
            '<tr>' +
            '<td class="lyrics">Type some lyrics here</td>' +
            '</tr>' + 
            '</table>' + 
            '</div>' + 
            '</div>';
        const realOutput = editor.find('div.chord-output').html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });

    it('renders the chord chart output', () => {
        const editor = shallow(<ChordEditor />);
        const expectedOutput =
            '<div style="width:100%;height:100%;font-family:monospace" class="chord-output">' +
            '<div class="chord-sheet">' + 
            '<table class="row">' + 
            '<tr>' + 
            '<td class="chord">B</td>' + 
            '<td class="chord">Am</td>' + 
            '</tr>' +
            '<tr>' +
            '<td class="lyrics">New </td>' +
            '<td class="lyrics">Lyrics</td>' +
            '</tr>' + 
            '</table>' + 
            '</div>' + 
            '</div>';
        editor.setState({ value: "[B]New [Am]Lyrics" });
        const realOutput = editor.find('div.chord-output').html();
        expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
    });
});
